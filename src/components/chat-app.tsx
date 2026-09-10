"use client";

import { useEffect, useRef, useState } from "react";
import {
  AlertTriangle,
  ArrowUp,
  ExternalLink,
  Phone,
  RotateCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  FALLBACK_BLOCKS,
  GREETING_BLOCKS,
  MEDICAL_BLOCKS,
  THANKS_BLOCKS,
  answerQuestion,
} from "@/lib/engine";
import {
  RESOURCES,
  STARTER_QUESTIONS,
  TOPICS,
  type AnswerBlock,
} from "@/lib/knowledge";
import { cn } from "@/lib/utils";

type ChatMessage = {
  id: string;
  role: "user" | "bot";
  blocks: AnswerBlock[];
  followUps?: string[];
  topicTitle?: string;
};

function newId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function openingMessage(): ChatMessage {
  return {
    id: "welcome",
    role: "bot",
    blocks: GREETING_BLOCKS,
    followUps: STARTER_QUESTIONS,
  };
}

function AnswerBody({ blocks }: { blocks: AnswerBlock[] }) {
  return (
    <div className="space-y-3 text-[15px] leading-relaxed">
      {blocks.map((block, index) => {
        if (block.type === "p") {
          return <p key={index}>{block.text}</p>;
        }
        if (block.type === "ul") {
          return (
            <ul key={index} className="list-disc space-y-1.5 pl-5">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "ol") {
          return (
            <ol key={index} className="list-decimal space-y-1.5 pl-5">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          );
        }
        if (block.type === "warn") {
          return (
            <div
              key={index}
              className="flex gap-2 rounded-xl border border-amber-300/70 bg-amber-50 px-3 py-2.5 text-amber-950"
            >
              <AlertTriangle className="mt-0.5 size-4 shrink-0" />
              <p>{block.text}</p>
            </div>
          );
        }
        if (block.type === "tip") {
          return (
            <div
              key={index}
              className="flex gap-2 rounded-xl border border-teal-200 bg-teal-50 px-3 py-2.5 text-teal-950"
            >
              <Sparkles className="mt-0.5 size-4 shrink-0" />
              <p>{block.text}</p>
            </div>
          );
        }
        return (
          <div key={index} className="flex flex-col gap-2">
            {block.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-teal-200 bg-white px-3 py-2 text-sm font-medium text-teal-800 hover:bg-teal-50"
              >
                <ExternalLink className="size-3.5" />
                {item.label}
              </a>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export function ChatApp() {
  const [messages, setMessages] = useState<ChatMessage[]>([openingMessage()]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [lastTopicId, setLastTopicId] = useState<string | undefined>();
  const listRef = useRef<HTMLDivElement>(null);
  const pendingRef = useRef(false);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, pending]);

  function respond(text: string) {
    const result = answerQuestion(text, lastTopicId);
    let blocks: AnswerBlock[] = FALLBACK_BLOCKS;
    let followUps = STARTER_QUESTIONS.slice(0, 4);
    let topicTitle: string | undefined;
    let nextTopic = lastTopicId;

    if (result.kind === "greeting") {
      blocks = GREETING_BLOCKS;
      followUps = STARTER_QUESTIONS;
    } else if (result.kind === "thanks") {
      blocks = THANKS_BLOCKS;
      followUps = STARTER_QUESTIONS.slice(0, 3);
    } else if (result.kind === "medical") {
      blocks = MEDICAL_BLOCKS;
      followUps = result.related.map((topic) => topic.title);
    } else if (result.kind === "topic" && result.topic) {
      blocks = result.topic.blocks;
      followUps = result.topic.followUps;
      topicTitle = result.topic.title;
      nextTopic = result.topic.id;
    } else {
      followUps = result.related.map((topic) => topic.shortLabel);
    }

    setLastTopicId(nextTopic);
    setMessages((current) => [
      ...current,
      {
        id: newId(),
        role: "bot",
        blocks,
        followUps,
        topicTitle,
      },
    ]);
  }

  function send(raw: string) {
    const text = raw.trim();
    if (!text || pendingRef.current) return;
    pendingRef.current = true;
    setMessages((current) => [
      ...current,
      { id: newId(), role: "user", blocks: [{ type: "p", text }] },
    ]);
    setInput("");
    setPending(true);
    window.setTimeout(() => {
      respond(text);
      pendingRef.current = false;
      setPending(false);
    }, 280);
  }

  function reset() {
    pendingRef.current = false;
    setPending(false);
    setMessages([openingMessage()]);
    setLastTopicId(undefined);
    setInput("");
  }

  return (
    <div className="flex min-h-full flex-1 flex-col bg-[radial-gradient(1200px_600px_at_10%_-10%,#d7f4ee,transparent),radial-gradient(900px_500px_at_100%_0%,#f4e7c5,transparent)]">
      <header className="border-b border-teal-900/10 bg-teal-950 text-teal-50">
        <div className="mx-auto flex w-full max-w-6xl items-start justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex size-11 items-center justify-center rounded-2xl bg-amber-300 text-teal-950 shadow-sm">
              <ShieldCheck className="size-6" />
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] text-amber-300 uppercase">
                Maklumat kesedaran
              </p>
              <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Chatbot Info Kesedaran Ubat
              </h1>
              <p className="mt-1 max-w-xl text-sm text-teal-100/85">
                Maklumat berkaitan ubat berdaftar, kosmetik bernotifikasi, dan
                kesedaran bahaya ubat tidak sah.
              </p>
            </div>
          </div>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={reset}
            className="hidden shrink-0 bg-white/10 text-white hover:bg-white/15 sm:inline-flex"
          >
            <RotateCcw className="size-3.5" />
            Mula semula
          </Button>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px]">
        <section className="flex min-h-[70vh] flex-col overflow-hidden rounded-3xl border border-teal-900/10 bg-white/90 shadow-[0_20px_60px_-32px_rgba(4,47,46,0.45)] backdrop-blur">
          <div
            ref={listRef}
            className="h-[min(62vh,720px)] overflow-y-auto overscroll-contain lg:h-[min(68vh,760px)]"
          >
            <div className="space-y-4 p-4 sm:p-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.role === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[92%] rounded-2xl px-4 py-3 sm:max-w-[80%]",
                      message.role === "user"
                        ? "bg-teal-800 text-white"
                        : "bg-stone-50 text-stone-900 ring-1 ring-stone-200",
                    )}
                  >
                    {message.role === "bot" && message.topicTitle ? (
                      <Badge
                        variant="secondary"
                        className="mb-2 bg-teal-100 text-teal-900"
                      >
                        {message.topicTitle}
                      </Badge>
                    ) : null}
                    <AnswerBody blocks={message.blocks} />
                    {message.role === "bot" && message.followUps?.length ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {message.followUps.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => send(item)}
                            className="rounded-full border border-teal-200 bg-white px-3 py-1.5 text-left text-xs font-medium text-teal-800 hover:bg-teal-50"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
              {pending ? (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-stone-50 px-4 py-3 text-sm text-stone-500 ring-1 ring-stone-200">
                    Sedang mencari jawapan...
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="border-t border-stone-200 p-3 sm:p-4">
            <div className="flex items-end gap-2">
              <Textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Tanya soalan, contoh: Macam mana nak kenal ubat berdaftar?"
                rows={2}
                className="min-h-12 resize-none text-base"
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    send(input);
                  }
                }}
              />
              <Button
                type="button"
                size="icon-lg"
                disabled={pending || !input.trim()}
                className="size-11 rounded-xl bg-teal-800 hover:bg-teal-700"
                aria-label="Hantar soalan"
                onClick={() => send(input)}
              >
                <ArrowUp className="size-5" />
              </Button>
            </div>
            <p className="mt-2 text-xs text-stone-500">
              Untuk maklumat lanjut dan aduan, boleh layari platform SOBAT di{" "}
              <a
                href="https://beacons.ai/cpfpahang"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal-800 underline underline-offset-2"
              >
                https://beacons.ai/cpfpahang
              </a>{" "}
              atau hubungi{" "}
              <a href="tel:095707737" className="font-medium text-teal-800">
                095707737
              </a>
              .
            </p>
          </div>
        </section>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-teal-900/10 bg-white/90 p-4 shadow-sm">
            <h2 className="text-sm font-semibold tracking-tight text-teal-950">
              Topik popular
            </h2>
            <div className="mt-3 flex flex-col gap-2">
              {TOPICS.slice(0, 8).map((topic) => (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => send(topic.title)}
                  className="rounded-xl border border-stone-200 px-3 py-2 text-left text-sm hover:border-teal-300 hover:bg-teal-50"
                >
                  {topic.shortLabel}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-teal-900/10 bg-teal-950 p-4 text-teal-50 shadow-sm">
            <h2 className="flex items-center gap-2 text-sm font-semibold">
              <Phone className="size-4 text-amber-300" />
              Saluran rasmi
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {RESOURCES.map((resource) => (
                <li key={resource.href}>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col rounded-xl bg-white/5 px-3 py-2 hover:bg-white/10"
                  >
                    <span className="font-medium">{resource.label}</span>
                    <span className="text-xs text-teal-200/80">
                      {resource.hint}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-teal-100/80">
              Untuk maklumat lanjut dan aduan, boleh layari platform SOBAT di{" "}
              <a
                href="https://beacons.ai/cpfpahang"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                https://beacons.ai/cpfpahang
              </a>{" "}
              atau hubungi{" "}
              <a href="tel:095707737" className="font-medium text-amber-300">
                095707737
              </a>
              .
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
