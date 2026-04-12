import './Banner.scss'

function Banner({ title, image, imageAlt = 'Banner image' }) {
  return (
    <header className='Banner'>
      {title ? <h1>{title}</h1> : null}
      {image ? <img src={image} alt={imageAlt} /> : null}
    </header>
  )
}

export default Banner