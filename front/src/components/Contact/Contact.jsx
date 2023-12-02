import Link from 'next/link';
import email from '@/assets/svg/email.svg';
import ExternalLinkIcon from '../Utils/ExternalLinkIcon';
import Image from 'next/image';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <Link
            href="/contact"
            className={`${styles.container}`}>
            <ExternalLinkIcon></ExternalLinkIcon>
            <Image className={styles.icon} src={email}></Image>
        </Link>
    )
}