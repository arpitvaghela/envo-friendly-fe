
import React from 'react'
import Card from './card'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

class Listall extends React.Component {
    render() {
        let ALL_QUERY = gql`
        {
            products{
              productId,
              productName,
              productPrice,
              productCategory,
              imageUrl,
              productIngredients,
              productAbout,
              envScore
            }
          }`;
        return (<Query query={ALL_QUERY}>
            {({ loading, error, data }) => {
                if (loading) return <div>Fetching</div>
                if (error) return <div>Error</div>

                const products = data.products
                return (
                    <div className="cardlist">
                        {products.map(product => <Card key={product.productId} product={product} />)}
                    </div>
                )
            }}
        </Query>)

    }
}

export default Listall;