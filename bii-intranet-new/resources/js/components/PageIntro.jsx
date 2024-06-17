import clsx from 'clsx'
import { Container } from './Container.jsx'
import {FadeIn} from "../Helper/FadeIn.tsx";

export function PageIntro({ eyebrow, title, children, centered = false }) {
  return (
    <Container className={clsx('', centered && 'text-center')}>
      <FadeIn>
        <h1>
            <span className="order-first text-sm text-primary-header">
              {eyebrow}
            </span>

            <span className="sr-only"> - </span>

            <span
              className={clsx(
                'mt-6 block mt-6 font-display text-4xl font-medium tracking-tight text-primary-header sm:text-4xl w-4/5 mx-auto',
                centered && 'mx-auto',
              )}>
              {title}
            </span>
        </h1>

        <div
          className={clsx(
            'mt-6 sm:mt-10 text-sm font-semibold text-primary-header',
            centered && 'mx-auto',
          )}>
          {children}
        </div>
      </FadeIn>
    </Container>
  )
}
