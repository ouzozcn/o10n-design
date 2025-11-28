// src/app/api/chat/route.ts
import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';
import { PORTFOLIO_SYSTEM_PROMPT } from '@/lib/chat/system-prompt';
export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: anthropic('claude-3-5-haiku-latest'),
    system: PORTFOLIO_SYSTEM_PROMPT,
    messages,
  });

  return result.toTextStreamResponse();
}
