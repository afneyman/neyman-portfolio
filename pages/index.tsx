import Me from '../assets/me.svg';
import SideArrow from '../assets/side-arrow.svg';

export default function Main() {
  let sections = [
    <Section title='about' content={<About />} key='1' />,
    <Section title={`stuff i've made`} content={<Stuff />} key='2' />,
    <Section title={`my resume`} content={<Resume />} key='3' />,
    <Section title={`contact me`} content={<Contact />} key='4' />,
  ];

  return (
    <div className='container'>
      <div className='name'>
        <h1>Alex Neyman</h1>
      </div>
      <div className='desk'>
        <Me></Me>
      </div>
      <div className='tagline'>
        <h2>Student and Developer</h2>
      </div>
      {sections}
    </div>
  );
}

type SectionProps = {
  title: string;
  content?: React.ReactNode;
};

function Section(props: SectionProps) {
  return (
    <div className='heading'>
      <SideArrow />
      <h3>{props.title}</h3>
      {props.content}
    </div>
  );
}

function About() {
  return (
    <div className='about'>
      <p>
        Hey, I’m a third-year Computer Science student at Case Western Reserve
        University with a passion for software design and engineering. My most
        recent industry experience was a software engineering internship at MIM
        Software in Cleveland, OH.
      </p>
    </div>
  );
}

function Stuff() {
  return (
    <div className='stuff'>
      <div className='item'>
        <p className='project-title'>GoodEatz: GoodReads but for food!</p>
        <p className='tech'>React Native, Firebase, Google Places</p>
        <br className='divider' />
      </div>
      <div className='item'>
        <p className='project-title'>
          AutoCalendar: Converts images of schedules to google calendar events
        </p>
        <p className='tech'>React, Google OCR, Python, Flask</p>
        <br className='divider' />
      </div>
    </div>
  );
}

function Resume() {
  return <div className='resume'></div>;
}

function Contact() {
  return (
    <div className='contact'>
      <form name='contact' method='POST' data-netlify='true'>
        <p>
          <input type='text' name='name' placeholder='your name' />
        </p>
        <p>
          <input
            type='text'
            name='email'
            placeholder='your email/phone number'
          />
        </p>
        <p>
          <textarea name='name' placeholder='message' />
        </p>
        <p>
          <button type='submit'>Submit</button>
        </p>
      </form>
    </div>
  );
}
