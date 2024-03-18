import { getProductsMeta } from '@/sdk/queries/products';
import { MetadataRoute } from 'next';

//ajilsanguee

type Route = {
  url: string;
  lastModified: string;
};

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = [''].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString()
  }));

  const { products } = await getProductsMeta({
    variables: {
      perPage: 1000
    }
  });

  const productsPromise = products.map(product => ({
    url: `${baseUrl}/product/${product._id}`,
    lastModified: product.modifiedAt
  }));

  let fetchedRoutes: Route[] = [];

  try {
    fetchedRoutes = (await Promise.all([productsPromise])).flat();
  } catch (error) {
    throw JSON.stringify(error, null, 2);
  }

  return [...routesMap, ...fetchedRoutes];
}
