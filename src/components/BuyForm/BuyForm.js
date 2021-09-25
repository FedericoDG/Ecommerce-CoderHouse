import './BuyForm.scss'

const BuyForm = ({buyer, onSubmit, onChange}) => {
  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <div className="fields">
        <h1>Complete con sus datos</h1>
        <input type="text" name="name" placeholder="nombre" required onChange={onChange} />
        <input type="text" name="phone" placeholder="teléfono" required onChange={onChange} />
        <input type="email" name="email" placeholder="email" required onChange={onChange} />
        <input type="email" name="repeatEmail" placeholder="repetir email" required onChange={onChange} />
      </div>
      <div className="buy">
        {
          buyer.email === buyer.repeat_email && buyer.email !== '' && buyer.name && buyer.phone ?
            <button>comprar</button>
            :
            <button disabled>comprar</button>
        }
      </div>
    </form>
  );
};

export default BuyForm;
