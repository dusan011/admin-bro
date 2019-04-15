import React from 'react'
import mapValue from './map-value'
import PropertyInShow from '../../layout/property-in-show'

export default class Show extends React.PureComponent {
  render() {
    const { property, record } = this.props

    const value = mapValue(record.params[property.name])

    return (
      <PropertyInShow property={property}>
        {value}
      </PropertyInShow>
    )
  }
}