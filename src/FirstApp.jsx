import PropTypes from 'prop-types';
export const FirstApp = ({title, subTitle, otro}) => {

  return (
    // React.Fragment: permite agrupar elementos sin necesidad de un div
    <>
     
     <h1>{title}</h1>
      <p>{subTitle}</p>
      <p>{otro}</p>
    </>
  )
}
// PropTypes: permite definir el tipo de dato que se espera recibir en las propiedades   
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}
