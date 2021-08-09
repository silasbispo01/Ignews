import styles from './styles.module.scss';

import { SignInButton } from './SignInButton';
import { ActiveLink } from '../ActiveLink';

import { useRouter } from 'next/router';


export function Header (){
  const { asPath } = useRouter()
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLink href='/'>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href='/posts' pageActive={asPath.includes('posts')}>
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton/>
      </div>
    </header>
  )
}
