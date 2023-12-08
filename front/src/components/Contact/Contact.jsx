import Link from 'next/link';
import email from '@/assets/svg/email.svg';
import Image from 'next/image';
import styles from './Contact.module.css';
import ArrowIcon from '../Utils/ArrowIcon';

export default function Contact() {
    return (
        <Link
            href="/contact"
            className={`${styles.container}`}>
            <ArrowIcon className={styles.prueba} ></ArrowIcon>
            <Image className={styles.icon} src={email} alt=''></Image>
        </Link>
    )
}