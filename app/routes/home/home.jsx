import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
// import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
// import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
// import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import finmanTexture from '../../../resources/finman_landing page.png';
import diagnoseAITexture from '../../../resources/DiagnoseAI.png';
import parkAndGoTexture from '../../../resources/park-and-go.png';
import parkAndGoTexture2 from '../../../resources/park-and-go-2.jpeg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { TechStack } from './tech-stack';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const techStack = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, techStack, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Finman - Track Expenses Like You Think Instantly"
        description="AI powered expense tracking app which keeps record of all your expenses Easily and secure"
        buttonText="View website"
        buttonLink="https://finmanagent.vercel.app/"
        model={{
          type: 'laptop',
          alt: 'Finman expense tracking app',
          textures: [
            {
              srcSet: `${finmanTexture}`,
              placeholder: finmanTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Video game progress tracking"
        description="Design and development for a video game tracking app built in React Native"
        buttonText="View project"
        buttonLink="https://github.com/DevanshKhodaskar/HackOn_SupaStrikas"
        model={{
          type: 'laptop',
          alt: 'DiagnoseAI application',
          textures: [
            {
              srcSet: `${diagnoseAITexture}`,
              placeholder: diagnoseAITexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Park and Go"
        description="A mobile app for finding and booking parking spaces from your home so you dont have to deal with the hassles of finding parking spaces."
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'phone',
          alt: 'Park and Go application',
          textures: [
            {
              srcSet: `${parkAndGoTexture}`,
              placeholder: parkAndGoTexture,
            },
            {
              srcSet: `${parkAndGoTexture2}`,
              placeholder: parkAndGoTexture2,
            },
          ],
        }}
      />
      <TechStack
        id="tech-stack"
        sectionRef={techStack}
        visible={visibleSections.includes(techStack.current)}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
