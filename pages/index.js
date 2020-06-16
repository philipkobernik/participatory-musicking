//import Layout from '../components/MyLayout';
//import Link from 'next/link';

//export default function Index() {
  //return (
    //<Layout>
      //<p>Hello Next.js</p>
    //</Layout>
  //);
//}


//import Layout from '../components/MyLayout';
//import Link from 'next/link';

//const PostLink = props => (
  //<li>
    //<Link href={`/post?title=${props.title}`}>
      //<a>{props.title}</a>
    //</Link>
  //</li>
//);
//export default function Blog() {
  //return (
    //<Layout>
      //<h1>My Blog</h1>
      //<ul>
        //<PostLink title="Hello Next.js" />
        //<PostLink title="Learn Next.js is awesome" />
        //<PostLink title="Deploy apps with Zeit" />
      //</ul>
    //</Layout>
  //);
//}

//import Layout from '../components/MyLayout';
//import Link from 'next/link';

//const PostLink = props => (
  //<li>
    //<Link href="/p/[id]" as={`/p/${props.id}`}>
      //<a>{props.id}</a>
    //</Link>
  //</li>
//);

//export default function Blog() {
  //return (
    //<Layout>
      //<h1>My Blog</h1>
      //<ul>
        //<PostLink id="hello-nextjs" />
        //<PostLink id="learn-nextjs" />
        //<PostLink id="deploy-nextjs" />
      //</ul>
    //</Layout>
  //);
//}


import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

//const members = ['jennifer', 'sonia', 'sam', 'jungah', 'cy', 'mark', 'raphael', 'misha', 'tobias', 'ari', 'xindi'].sort()
const members = ['ocean', 'davina', 'stefanie', 'madi', 'grace', 'sam', 'maritza', 'mikhail', 'ashley', 'maya', 'oswaldo', 'breana', 'max', 'jiahui', 'maiqi', 'crystal', 'michelle', 'mckenna', 'yichen', 'bristol'].sort()

const Index = props => (
  <Layout>
    <h1>Participatory Musicking</h1>
    <ul>
      {members.map(name => (
        <li key={name}>
          <Link href="/players/[user]" as={`/players/${name}`}>
            <a>{name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

//Index.getInitialProps = async function() {
  //const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  //const data = await res.json();

  //console.log(`Show data fetched. Count: ${data.length}`);

  //return {
    //shows: data.map(entry => entry.show)
  //};
//};

export default Index;
