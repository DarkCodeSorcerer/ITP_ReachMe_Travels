//columns for the user table
export const userColumns = [
  // { field: "_id", headerName: "ID", width: 250 },
  {
    field: "Image",
    headerName: "Image",
    width: 70,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "email",
    headerName: "Email",
    width: 300,
  },

  {
    field: "mobile",
    headerName: "Mobile",
    width: 150,
  },
  {
    field: "country",
    headerName: "Country",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 150,
  },
];

//columns for the vehicle table
export const vehicleColumns = [
  //{ field: "_id", headerName: "ID", width: 220 },
  {
    field: "Image",
    headerName: "Image",
    width: 70,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={
              `vehicle/images/${params.row.vehicleMainImg}` ||
              "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
            }
            alt="avatar"
          />
        </div>
      );
    },
  },
  {
    field: "brand",
    headerName: "Brand",
    width: 100,
  },
  {
    field: "model",
    headerName: "Model",
    width: 100,
  },
  {
    field: "ownerName",
    headerName: "Owner Name",
    width: 230,
  },
  {
    field: "vehicleType",
    headerName: "Vehicle Type",
    width: 150,
  },
  {
    field: "vehicleNumber",
    headerName: "vehicle Number",
    width: 150,
  },
  {
    field: "capacity",
    headerName: "Capacity",
    width: 100,
  },
  {
    field: "location",
    headerName: "Location",
    width: 150,
  },
];


export const vehicleReservationColumns = [
  //{ field: "_id", headerName: "ID", width: 220 },
  {
    field: "date",
    headerName: "Date",
    width: 110,
  },
  {
    field: "vehicleNumber",
    headerName: "Vehicle Number",
    width: 100,
  },
  {
    field: "location",
    headerName: "Location",
    width: 150,
  },

  {
    field: "vehicleNumber",
    headerName: "Vehicle Number",
    width: 150,
  },
  {
    field: "pickupDate",
    headerName: "Pickup Date",
    width: 110,
  },
  {
    field: "returnDate",
    headerName: "Return Date",
    width: 110,
  },
  {
    field: "price",
    headerName: "Price",
    width: 110,
  },
  {
    field: "needDriver",
    headerName: "Need Driver",
    width: 110,
  },
];

export const tourColumns = [
  //{ field: "_id", headerName: "ID", width: 220 },
  {
    field: "Image",
    headerName: "Image",
    width: 70,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Name of Tour Package",
    width: 200,
  },
  {
    field: "category",
    headerName: "Tour Category",
    width: 150,
  },
  {
    field: "duration",
    headerName: "No of Days",
    width: 100,
  },
  {
    field: "groupCount",
    headerName: "Max Group Count",
    width: 150,
  },
  {
    field: "currentUser",
    headerName: "Added by",
    width: 150,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
];

export const tourReservationColumns = [
  //{ field: "_id", headerName: "ID", width: 220 },
  {
    field: "Image",
    headerName: "Image",
    width: 70,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            //params.row.tourImg
            src={
              "https://elements-resized.envatousercontent.com/envato-shoebox/07d7/f48e-e285-4bab-a5da-135a6c3a9602/162864.jpg?w=800&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=ec55578eeb7e2d14907f723599e317714f7dd02d2da7131992f82bd2116a6f52" ||
              "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
            }
            alt="avatar"
          />
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Name of Tour Package",
    width: 200,
  },
  {
    field: "category",
    headerName: "Tour Category",
    width: 150,
  },
  {
    field: "duration",
    headerName: "No of Days",
    width: 100,
  },
  {
    field: "places",
    headerName: "Places to Visit",
    width: 500,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
];
export const hotelColumns = [
  //{ field: "_id", headerName: "ID", width: 220 },
  {
    field: "Image",
    headerName: "Image",
    width: 70,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={
              `hotels/images/${params.row.HotelImg}` ||
              "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
            }
            alt="avatar"
          />
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "type",
    headerName: "Hotel Type",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "contactNo",
    headerName: "Mobile",
    width: 150,
  },
  {
    field: "contactName",
    headerName: "Conatct Name",
    width: 150,
  },
  {
    field: "cheapestPrice",
    headerName: "Cheapest Price",
    width: 150,
  },
];

export const trainColumns = [
  //{ field: "_id", headerName: "ID", width: 220 },
  {
    field: "Image",
    headerName: "Image",
    width: 70,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Class_M10.jpg"
            alt="avatar"
          />
        </div>
      );
    },
  },
  {
    field: "trainName",
    headerName: "Name of the Train",
    width: 200,
  },
  {
    field: "from",
    headerName: "From",
    width: 150,
  },
  {
    field: "to",
    headerName: "To",
    width: 150,
  },
  {
    field: "noOfSeats",
    headerName: "No of seats",
    width: 100,
  },
  {
    field: "arrivalTime",
    headerName: "Arrival Time",
    width: 100,
  },
  {
    field: "depatureTime",
    headerName: "Departure Time",
    width: 100,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
];
