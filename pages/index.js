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

export default Index;
