import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") return;
    onSearch(city);
    setCity("");
  };

  return (
    <div className="p-3 bg-secondary rounded">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control type="text" placeholder="Cerca città..." value={city} onChange={(e) => setCity(e.target.value)} />
        </Form.Group>
        <Button type="submit" className="mt-2 w-100">
          Cerca
        </Button>
      </Form>
    </div>
  );
}

export default SearchBar;
