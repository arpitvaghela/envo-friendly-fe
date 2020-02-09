import React from 'react'
import Card from './card'
import { Query } from 'react-apollo'
import { withRouter } from 'react-router'
import gql from 'graphql-tag'

class SearchResult extends React.Component {
    render() {
        let SEARCH_QUERY = gql`
        {
            products(search:"${this.props.query}"){
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
        return (
        <Query query={SEARCH_QUERY}>
            {({ loading, error, data }) => {
                if (loading) return <div>Fetching</div>
                if (error) return <div>Error</div>

                const products = data.products

                return (
                    <div className="cardlist">
                        {products.map((product,index) => <Card key={index} product={product} />)}
                    </div>
                )
            }}
        </Query>)

    }
}

export default withRouter(SearchResult);