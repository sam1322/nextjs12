import { useRouter } from "next/router";

function ProductItem() {
  const router = useRouter();
  const { productid } = router.query; 
  
  return <div>ProductItem {productid}  </div>;
}

export default ProductItem;
