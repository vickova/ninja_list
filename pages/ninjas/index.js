import styles from '../../styles/ninjas.module.css';
import Link from 'next/link';

export const getStaticProps = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props:{ninjas: data}
    }
}

const Ninjas = ({ ninjas }) => {
    console.log(ninjas)
    return ( 
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map((ninja)=>{
                    return (
                        <Link key={ninja.id} href={'/ninjas/'+ninja.id} className={styles.single}>
                                <h3>{ninja.name}</h3>
                        </Link>
                    )
                })
            }
        </div>
     );
}
 
export default Ninjas;