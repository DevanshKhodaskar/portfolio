import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { Transition } from '~/components/transition';
import styles from './tech-stack.module.css';

const TechCategory = ({ title, icon, items }) => (
  <div className={styles.category}>
    <div className={styles.categoryHeader}>
      <span className={styles.icon}>{icon}</span>
      <Heading level={4} className={styles.categoryTitle}>
        {title}
      </Heading>
    </div>
    <div className={styles.itemsGrid}>
      {items.map((item) => (
        <div key={item.name} className={styles.techItem} title={item.name}>
          <img src={item.logo} alt={item.name} className={styles.techLogo} />
          <div className={styles.techName}>{item.name}</div>
        </div>
      ))}
    </div>
  </div>
);

const getLogoUrl = (name) => {
  const logoMap = {
    'Python': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    'C': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
    'Java': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
    'Django': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg',
    'Flask': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg',
    'FastAPI': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg',
    'Streamlit': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/streamlit/streamlit-original.svg',
    'Scikit-learn': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/scikitlearn/scikitlearn-original.svg',
    'TensorFlow': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg',
    'Keras': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/keras/keras-original.svg',
    'PyTorch': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg',
    'Langchain': 'https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/langchain.png',
    'Transformers': 'https://raw.githubusercontent.com/huggingface/transformers/main/docs/source/imgs/transformers_logo.png',
    'NumPy': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg',
    'Pandas': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg',
    'Matplotlib': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/matplotlib/matplotlib-original.svg',
    'SciPy': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/scipy/scipy-original.svg',
    'SQL': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
    'Neo4j': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/neo4j/neo4j-original.svg',
    'MongoDB': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
    'PostgreSQL': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
    'React': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    'Next.js': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
    'Node.js': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
    'Express': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
    'Postman': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg',
    'Gemini': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg',
    'Hugging Face': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/huggingface/huggingface-original.svg',
    'Git': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
    'GitHub': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg',
    'VS Code': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg',
    'Cursor': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vim/vim-original.svg',
    'Android Studio': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/androidstudio/androidstudio-original.svg',
    'Vercel': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg',
    'Netlify': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/netlify/netlify-original.svg',
    'MetaMask': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/metamask/metamask-original.svg',
    'Figma': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg',
    'Canva': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/canva/canva-original.svg',
    'Jira': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg',
    'Vector Databases': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
  };
  return logoMap[name] || 'https://via.placeholder.com/64?text=' + encodeURIComponent(name);
};

export const TechStack = ({ id, visible, sectionRef }) => {
  const techData = [
    {
      title: 'Programming Languages',
      icon: '💻',
      items: [
        { name: 'Python', logo: getLogoUrl('Python') },
        { name: 'C', logo: getLogoUrl('C') },
        { name: 'Java', logo: getLogoUrl('Java') },
      ],
    },
    {
      title: 'Frameworks',
      icon: '🏗️',
      items: [
        { name: 'Django', logo: getLogoUrl('Django') },
        { name: 'Flask', logo: getLogoUrl('Flask') },
        { name: 'FastAPI', logo: getLogoUrl('FastAPI') },
        { name: 'Streamlit', logo: getLogoUrl('Streamlit') },
      ],
    },
    {
      title: 'Machine Learning',
      icon: '🤖',
      items: [
        { name: 'Scikit-learn', logo: getLogoUrl('Scikit-learn') },
        { name: 'TensorFlow', logo: getLogoUrl('TensorFlow') },
        { name: 'Keras', logo: getLogoUrl('Keras') },
        { name: 'PyTorch', logo: getLogoUrl('PyTorch') },
      ],
    },
    {
      title: 'Generative AI',
      icon: '✨',
      items: [
        { name: 'Langchain', logo: getLogoUrl('Langchain') },
        { name: 'Transformers', logo: getLogoUrl('Transformers') },
        { name: 'Hugging Face', logo: getLogoUrl('Hugging Face') },
      ],
    },
    {
      title: 'Data Visualization',
      icon: '📊',
      items: [
        { name: 'NumPy', logo: getLogoUrl('NumPy') },
        { name: 'Pandas', logo: getLogoUrl('Pandas') },
        { name: 'Matplotlib', logo: getLogoUrl('Matplotlib') },
        { name: 'SciPy', logo: getLogoUrl('SciPy') },
      ],
    },
    {
      title: 'Databases',
      icon: '🗄️',
      items: [
        { name: 'SQL', logo: getLogoUrl('SQL') },
        { name: 'Neo4j', logo: getLogoUrl('Neo4j') },
        { name: 'MongoDB', logo: getLogoUrl('MongoDB') },
        { name: 'PostgreSQL', logo: getLogoUrl('PostgreSQL') },
      ],
    },
    {
      title: 'Frontend & Web',
      icon: '🌐',
      items: [
        { name: 'React', logo: getLogoUrl('React') },
        { name: 'Next.js', logo: getLogoUrl('Next.js') },
        { name: 'Node.js', logo: getLogoUrl('Node.js') },
        { name: 'Express', logo: getLogoUrl('Express') },
      ],
    },
    {
      title: 'Tools & Others',
      icon: '🔧',
      items: [
        { name: 'Postman', logo: getLogoUrl('Postman') },
        { name: 'Gemini', logo: getLogoUrl('Gemini') },
        { name: 'Git', logo: getLogoUrl('Git') },
        { name: 'GitHub', logo: getLogoUrl('GitHub') },
        { name: 'VS Code', logo: getLogoUrl('VS Code') },
        { name: 'Cursor', logo: getLogoUrl('Cursor') },
        { name: 'Android Studio', logo: getLogoUrl('Android Studio') },
        { name: 'Vercel', logo: getLogoUrl('Vercel') },
        { name: 'Netlify', logo: getLogoUrl('Netlify') },
        { name: 'MetaMask', logo: getLogoUrl('MetaMask') },
        { name: 'Figma', logo: getLogoUrl('Figma') },
        { name: 'Canva', logo: getLogoUrl('Canva') },
        { name: 'Jira', logo: getLogoUrl('Jira') },
      ],
    },
  ];

  return (
    <Section className={styles.techStack} as="section" id={id} ref={sectionRef}>
      <Transition in={visible} timeout={0}>
        {({ visible: inView, nodeRef }) => (
          <div className={styles.content} ref={nodeRef} data-visible={inView}>
            <Heading className={styles.title} level={2} as="h2" data-visible={inView}>
              My Tech Stack{' '}
              <span className={styles.subtitle}>— That I have worked with</span>
            </Heading>

            <div className={styles.grid}>
              {techData.map((category) => (
                <TechCategory
                  key={category.title}
                  title={category.title}
                  icon={category.icon}
                  items={category.items}
                />
              ))}
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
