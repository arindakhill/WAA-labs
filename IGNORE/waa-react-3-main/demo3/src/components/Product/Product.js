
const Product = (props) => {

    return (
        <div className="Content" >
            <h3> {props.name}</h3>
            <div className="Field">
                {props.price}
            </div>
            

        </div>
    );
}

export default Product;

