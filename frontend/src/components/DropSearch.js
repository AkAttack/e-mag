const DropSearch = ({searchWord, selectToNextStep, dbCustomer}) => {

  return (
    <div className="dropdown">
      {searchWord && dbCustomer
        .filter((item) => {
          const searchTerm = searchWord.toLowerCase();
          const dbnamefirst = item.namefirst.toLowerCase();
          const dbnamelast = item.namelast.toLowerCase();
          const dbphone = item.phone
          if(dbphone.startsWith(searchTerm) || dbnamefirst.startsWith(searchTerm) || dbnamelast.startsWith(searchTerm) ){
            return true
          };

        })
        .slice(0,9)
        .map((item) => (
          <div onClick={() => selectToNextStep(item)}
            customer={item}
            value={item.namefirst}
            className="dropdown-row"
            key={item.namefirst} >
            <p className="name" value={item.namefirst}>{item.namefirst}  {item.namelast}</p>
            <p className="phone">{item.phone} | {item.address}</p>
          </div>
      ))}
    </div>
  );
}

export default DropSearch;