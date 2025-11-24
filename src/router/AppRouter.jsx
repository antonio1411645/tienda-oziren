import CategoryPage from "../pages/CategoryPage/CategoryPage";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/product/:id" element={<ProductDetail />} />
  <Route path="/cart" element={<CartPage />} />

  <Route path="/category/:name" element={<CategoryPage />} />

  <Route path="*" element={<Home />} />
</Routes>
