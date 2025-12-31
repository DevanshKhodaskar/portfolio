import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { useRef } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { useActionData, useNavigation } from '@remix-run/react';
import { json } from '@remix-run/node';
import styles from './contact.module.css';

/* ---------------- META ---------------- */

export const meta = () =>
  baseMeta({
    title: 'Contact',
    description:
      'Send me a message if you’re interested in discussing a project or if you just want to say hi',
  });

/* ---------------- ACTION (REQUIRED) ---------------- */
/* Even if unused, Remix routes MUST export it if referenced */

export async function action() {
  return json({ success: true });
}

/* ---------------- COMPONENT ---------------- */

export default function Contact() {
  const email = useFormInput('');
  const message = useFormInput('');
  const initDelay = tokens.base.durationS;

  const actionData = useActionData();
  const { state } = useNavigation();
  const sending = state === 'submitting';

  return (
    <Section className={styles.contact}>
      <Transition unmount in={!actionData?.success} timeout={1600}>
        {({ status, nodeRef }) => (
          <div className={styles.contactContainer} ref={nodeRef}>
            <div className={styles.mailWrapper}>
              <Heading
                className={styles.mailTitle}
                data-status={status}
                level={3}
                as="h1"
                style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
              >
                <DecoderText
                  text="Email directly"
                  start={status !== 'exited'}
                  delay={300}
                />
              </Heading>

              <Text
                className={styles.mailDescription}
                data-status={status}
                size="m"
                as="p"
                style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
              >
                Open your default mail client and send a message directly
              </Text>

              <Button
                className={styles.mailButton}
                data-status={status}
                style={getDelay(tokens.base.durationM, initDelay)}
                href="mailto:devanshkhodaskar870@gmail.com?subject=Portfolio%20Inquiry"
                icon="send"
              >
                Send email
              </Button>
            </div>
          </div>
        )}
      </Transition>

      <Transition unmount in={actionData?.success}>
        {({ status, nodeRef }) => (
          <div className={styles.complete} aria-live="polite" ref={nodeRef}>
            <Heading
              level={3}
              as="h3"
              className={styles.completeTitle}
              data-status={status}
            >
              Message Sent
            </Heading>

            <Text
              size="l"
              as="p"
              className={styles.completeText}
              data-status={status}
              style={getDelay(tokens.base.durationXS)}
            >
              I’ll get back to you within a couple days, sit tight
            </Text>

            <Button
              secondary
              iconHoverShift
              className={styles.completeButton}
              data-status={status}
              style={getDelay(tokens.base.durationM)}
              href="/"
              icon="chevron-right"
            >
              Back to homepage
            </Button>
          </div>
        )}
      </Transition>

      <Footer className={styles.footer} />
    </Section>
  );
}

/* ---------------- UTILS ---------------- */

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({
    delay: numToMs((msToNum(offset) + numDelay).toFixed(0)),
  });
}
