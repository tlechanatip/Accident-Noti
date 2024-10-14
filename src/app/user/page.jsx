import Link from "next/link"

export default function Page() {
    return (
    <>
    <h1>Hello, User</h1>
    <ui>
        <li><Link href='/user/1'>User no.1</Link></li>
        <li><Link href='/user/2'>User no.2</Link></li>
        <li><Link href='/user/3'>User no.3</Link></li>
        <li><Link href='/user/4'>User no.4</Link></li>
        <li><Link href='/user/5'>User no.5</Link></li>
    </ui>
    </>
)
  }