import Link from 'next/link'

function Footer() {
  return (
    <div className="menu-navigazione-footer">
      <p> Copyright [2021] - 360 Street Media - All Right Reserved - Via Garibaldi 1 Termini Imerese - P.Iva ? </p>
      <ul className="navigazione-footer">
        <li><Link href="/">Home</Link></li>
        <li><Link href="#servizi">Servizi</Link></li>
        <li><Link href="#contatti">Contattaci</Link></li>
        <li><Link href="/faq">FAQ</Link></li>
      </ul>
    </div>
  )
}

export default Footer