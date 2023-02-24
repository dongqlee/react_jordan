import style from '../css/Read.module.css'

export default function Readmore() {
  return(
    <div className={style.readmore}>
      <p>Readmore</p>
      <ul className={style.readmore_box}>
        <li><img src={process.env.PUBLIC_URL+"/images/readmore_01.jpg"} alt="" /></li>  
        <li><img src={process.env.PUBLIC_URL+"/images/readmore_02.jpg"} alt="" /></li>  
        <li><img src={process.env.PUBLIC_URL+"/images/readmore_03.jpg"} alt="" /></li>  
      </ul>
    </div>
  )
}