# React Query + Context Architecture Summary

## What You Had (Problems)

1. **Redundant State Management**

   - `ProductContext.tsx` had both `useState` and `useQuery`
   - Manually calling `setProducts(data)` inside the `queryFn` (defeats the purpose of React Query)
   - Query result (`data`) was ignored

2. **Missing QueryClientProvider**

   - `App.tsx` didn't wrap components with `QueryClientProvider`
   - React Query won't work without this provider at the top level

3. **Broken Context Provider**
   - `ProductContext` component returned `<div></div>` with no value
   - No actual context value was exposed to child components

---

## What You Have Now (Correct)

### Architecture Overview

```
App
├── QueryClientProvider (enables React Query)
│   └── ProductProvider (exposes product data via context)
│       ├── Navigation (consumes context via useProducts hook)
│       ├── Footer
│       └── Other children
```

### Files Changed

#### 1. `App.tsx`

- **Added** `QueryClientProvider` wrapper (required for React Query)
- **Changed** `ProductContext` from self-closing component to wrapper provider
- **Imported** `QueryClient` and `QueryClientProvider` from `@tanstack/react-query`

```tsx
<QueryClientProvider client={queryClient}>
  <ProductProvider>
    <Navigation />
    <Footer />
  </ProductProvider>
</QueryClientProvider>
```

#### 2. `ProductContext.tsx`

- **Removed** redundant `useState`
- **Exported** `productContext` (so hooks can access it)
- **Now properly provides** context value with `{ products, isLoading, error }`
- **React Query handles** caching, refetching, and state management

```tsx
const { data, isLoading, error } = useQuery({
  queryKey: ["products"],
  queryFn: fetchProducts,
});

const value: ProductContextType = {
  products: data,
  isLoading,
  error: error as Error | null,
};

return (
  <productContext.Provider value={value}>{children}</productContext.Provider>
);
```

#### 3. `Navigation.tsx`

- **Removed** `axios`, `useEffect`, manual fetch
- **Added** `useContext` hook to consume the context
- **Added** guard check for context availability
- **Shows** loading/error/success states for debugging

```tsx
const context = useContext(productContext);
if (!context) {
  return <div>Error: ProductProvider not found</div>;
}
const { products, isLoading, error } = context;
```

#### 4. `useProducts.ts` (New)

- **Custom hook** for cleaner consumption
- **Throws error** if used outside `ProductProvider`
- **Usage**: `const { products, isLoading, error } = useProducts();`

---

## How It Works Now

1. **App renders** with `QueryClientProvider` and `ProductProvider`
2. **ProductProvider mounts**:
   - React Query starts the fetch (via `useQuery`)
   - Fetch function calls `axios.get("/products")`
   - Response is stored in `data`
3. **Navigation (or any child) mounts**:
   - Calls `useContext(productContext)` (or `useProducts()` hook)
   - Gets `{ products, isLoading, error }` from context
   - Re-renders when query state changes
4. **React Query caching**:
   - If another component requests "products" query key, uses cached data
   - Automatically refetches based on staleTime/gc settings

---

## Benefits of This Approach

✅ **Single source of truth** - One fetch, many consumers  
✅ **Automatic caching** - React Query handles it  
✅ **Loading/Error states** - Built-in via `isLoading` and `error`  
✅ **Type-safe** - `ProductContextType` ensures shape of data  
✅ **Scalable** - Add more data (users, categories, etc.) as separate context providers  
✅ **Testable** - Can mock `QueryClientProvider` in tests

---

## Next Steps

1. **Create a custom hook** (already done: `useProducts.ts`)

   - Use in Navigation: `const { products, isLoading, error } = useProducts();`

2. **Add a products list component** to display the fetched data

   - Example: Create `ProductGrid.tsx` that uses `useProducts()` hook

3. **Handle error UI** - Show a retry button or fallback

4. **Run json-server**:

   ```bash
   npm run json-server
   ```

5. **Start dev server**:

   ```bash
   npm run dev
   ```

6. **Check browser console** - Should see products fetched as JSON (not HTML)

---

## Comparison: Context vs React Query

| Feature            | Context Alone                     | Context + React Query         |
| ------------------ | --------------------------------- | ----------------------------- |
| **Fetching**       | Manual (`useEffect` + `useState`) | Automatic (`useQuery`)        |
| **Caching**        | Manual                            | Built-in                      |
| **Refetching**     | Manual                            | Automatic (staleTime, gcTime) |
| **Loading State**  | Manual                            | Built-in                      |
| **Error Handling** | Manual                            | Built-in                      |
| **Deduplication**  | Manual                            | Built-in                      |

Your setup now uses **Context + React Query**, which is the recommended pattern for sharing fetched data across components.
