import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "./../redux/products/actions";

const AddProduct = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit,reset , formState: { errors } } = useForm();

  const onSubmit = (data) => {
    dispatch(addProduct(data));
    reset();

  };

  return (
    <div className="formContainer">
      <h4 className="formTitle">Yeni Ürün Ekle</h4>
      <form
        className="space-y-4 text-[#534F4F]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-2">
          <label >Ürün Adı</label>
          <input
            {...register("name", { required: true })}
            className="addProductInput"
            type="text"
          />
          {errors.name && <span className="error">Ürün Adı gerekli</span>}
        </div>

        <div className="space-y-2">
          <label>Kategori</label>
          <select
            {...register("category", { required: true })}
            className="addProductInput"
          >
            <option value="">Bir kategori seçin</option>
            <option value="clothing">Giysi</option>
            <option value="gadgets">Araç</option>
            <option value="bags">Çanta</option>
            {/* Add more options as needed */}
          </select>
          {errors.category && <span className="error">Kategori gerekli</span>}
        </div>

        <div className="space-y-2">
          <label>Resim Adresi</label>
          <input
            {...register("imgUrl", { required: true })}
            className="addProductInput"
            type="text"
          />
          {errors.imgUrl && <span className="error">Resim URL'si gerekli</span>}
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label>Fiyat</label>
            <input
              {...register("price", { required: true, min: 0 })}
              className="addProductInput"
              type="number"
            />
            {errors.price && <span className="error">Lütfen geçerli bir fiyat girin</span>}
          </div>

          <div className="space-y-2">
            <label>Miktar</label>
            <input
              {...register("quantity", { required: true, min: 0 })}
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
            />
            {errors.quantity && <span className="error">Lütfen geçerli bir Miktar girin</span>}
          </div>
        </div>

        <button type="submit" className="submit bg-indigo-600 text-white">
          Ürün Ekle
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
