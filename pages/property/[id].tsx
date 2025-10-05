import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);
  if (!property) return <p>Property not found</p>;

  return (
    <div>
      <PropertyDetail property={property} />
      {property.reviews && property.reviews.length > 0 ? (
        <ReviewSection reviews={property.reviews} />
      ) : (
        <p>No reviews yet</p>
      )}
      <BookingSection price={property.price} />
    </div>
  );
}
