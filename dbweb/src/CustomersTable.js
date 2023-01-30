class CustomerTable extends React.Component {
    state = {
      customers: [],
    };
  
    componentDidMount() {
      // Call API to fetch customers data
      fetch("/api/customers")
        .then((res) => res.json())
        .then((customers) => {
          this.setState({ customers });
          console.log("Customers:", this.state.customers);
        })
        .catch((error) => {
          console.error("Error fetching customers:", error);
        });
    }

    // componentDidMount() {
    //     console.log(this.state.customers)
    // }
  
    render() {
      return (
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>First Name</th>
              <th>Middle Initial</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.User_id}</td>
                <td>{customer.Fname}</td>
                <td>{customer.Minit}</td>
                <td>{customer.Lname}</td>
                <td>{customer.Email}</td>
                <td>{customer.Address}</td>
                <td>{customer.PhoneNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  }
  