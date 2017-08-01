const ProductList = React.createClass({
    render: function () {
        return (
            <div className='ui items'>
                <Product />
            </div>
        );
    },
});

ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
);

const Product = React.createClass({
    render: function () {
        return (
            <div className='item'>
                <div className='image'>
                    <img src='images/products/image-aqua.png' />
                </div>
                <div className='middle aligned content'>
                    <div className='description'>
                        <a>Fort Knight</a>
                        <p>Authentic renaissance actors, delivered in just 2 weeks.</p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img
                            className='ui avatar image'
                            src='images/avatars/daniel.jpg'
                        />
                    </div>
                </div>
            </div>

        );
    },
});
