import React from "react";
import {Border} from "./Border";
import PageHeader from "./PageHeader";
import {FadeIn} from "../../Helper/FadeIn.tsx";
import StripContent from "../../Helper/StripContent.jsx";
import {ArrowLongRightIcon} from "@heroicons/react/16/solid";

function PageLink({page}) {
  return (
      <article key={page.href}>
            <Border position="left" className="relative flex flex-col items-start">
                <h3 className="text-base text-primary-header font-bold">
                    {page.title}
                </h3>

                <time
                    dateTime={page.date}
                    className="order-first text-sm text-paragraph">
                    {page.date}
                </time>

                <p className="mt-2.5 text-base text-paragraph">
                    <StripContent
                        slice={20}
                        content={page.content}
                    />
                    ...
                </p>

                <a
                    href={'/news/' + page.id}
                    className="mt-6 flex gap-x-3 font-semibold text-primary-header text-sm transition hover:text-neutral-700"
                    aria-label={`Read more: ${page.title}`}>

                    Read more

                    <ArrowLongRightIcon
                        className="w-6 flex-none fill-current"
                    />

                    <span
                        className="absolute inset-0"
                    />
                </a>
            </Border>
      </article>
  )
}

export function PageLinks({pages}) {
  return (
      <div className="pt-10">
          <div className="mx-auto max-w-2xl lg:max-w-none">
              <FadeIn>
                  <PageHeader
                      header="Related news"
                      subheader="News"
                  />

                  <FadeIn className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 pt-6">
                      {pages.map((page) => (
                          <FadeIn key={page.id}>
                              <PageLink
                                  page={page}
                              />
                          </FadeIn>
                      ))}
                  </FadeIn>
              </FadeIn>
          </div>
      </div>
  )
}
