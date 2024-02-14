"use client"



const PropertyListing = ({id, image, price, location, squareFeet, acres, bedrooms, bathrooms, otherRooms, yearBuilt, garage, airConditioning, heating, haunted}) => {
  return (
    <div>
        <img src={image} alt={`Property ${id}`}/>
        <p>Price: {price}</p>
        <p>Location: {location}</p>
        <p>Square Feet: {squareFeet}</p>
        <p>Acres: {acres}</p>
        <p>Bedrooms: {bedrooms}</p>
        <p>Bathrooms: {bathrooms}</p>
        <p>Other Rooms: {otherRooms}</p>
        <p>Year Built: {yearBuilt}</p>
        <p>Garage: {garage ? 'Yes' : 'No'}</p>
        <p>Air Conditioning: {airConditioning ? 'Yes' : 'No'}</p>
      <p>Heating: {heating ? 'Yes' : 'No'}</p>
      <p>Haunted: {haunted ? 'Yes' : 'No'}</p>
    </div>
  )
}
export default PropertyListing