import React from "react";
import { fetchPriceList, updateProduct } from "../utils/apis.js";
import { useState, useEffect } from "react";
import "../styles/PriceList.css";
import Norwayflag from "../assets/Norwayflag.png";

const PriceList = () => {
  const [products, setProducts] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchPriceList();
      console.log("API response:", data);

      if (data?.status && Array.isArray(data.list)) {
        setProducts(data.list);
      } else {
        setProducts([]);
      }
    };

    getProducts();
  }, []);
  const handleDropdown = (event) => {
    event.stopPropagation();
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const clickOutside = () => setDropdownOpen(false);
    document.addEventListener("click", clickOutside);

    return () => document.removeEventListener("click", clickOutside);
  }, []);

  const handleChange = (index, field, value) => {
    const updatedProducts = products.map((p, i) =>
      i === index ? { ...p, [field]: value } : p
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="pricelist-container">
      <div className="header">
        <div className="user-info">
          <span className="user-name">John Andre</span>
          <span className="user-company">Storfjord AS</span>
        </div>
        <div className="flag-Norway">
          Norsk Bokmal
          <img
            className="flag-icon-Norway"
            src={Norwayflag}
            alt="Norway Flag"
          />
        </div>
        <div className="dummy-hamburger" style={{ cursor: "pointer" }}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            width="1.5em"
            height="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        </div>
        <div
          className="dummy-toggle"
          href="#!"
          onClick={handleDropdown}
          style={{ cursor: "pointer" }}
        >
          <div className="language-title-box">
            <p className="language-name">English</p>
            <img
              src={"https://storage.123fakturere.no/public/flags/GB.png"}
              className="flag-icon drop-down-image"
              alt="English"
            />
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="left-menu">
          <h2>Menu</h2>
          <div className="menu-item">
            <img
              src="https://online.123fakturera.se/assets/invoices-BY0lwtyJ.png"
              alt="Invoices"
              className="menu-icon"
            />
            <span>Invoices</span>
          </div>
          <div className="menu-item">
            <img
              src="https://online.123fakturera.se/assets/customers-D9Vkbe79.png"
              alt="Customers"
              className="menu-icon"
            />
            <span>Customer register</span>
          </div>

          <div className="menu-item">
            <img
              src="https://online.123fakturera.se/assets/blueSettings-k49vaShA.png"
              alt="My Business"
              className="menu-icon"
            />
            <span>My Business</span>
          </div>
          <div className="menu-item">
            <img
              src="https://online.123fakturera.se/assets/invoiceJournal-MUxoNRXF.png"
              alt="Invoice"
              className="menu-icon"
            />
            <span>Invoice Journal</span>
          </div>
          <div className="menu-item">
            <img
              src="https://online.123fakturera.se/assets/pricelist-B-brUIvJ.png"
              alt="Price List"
              className="menu-icon"
            />
            <span>Price List</span>
          </div>
          <div className="menu-item">
            <img
              src="https://online.123fakturera.se/assets/multipleInvoicing-CQx5HdvY.png"
              alt="Multi invoicing"
              className="menu-icon"
            />
            <span>Multiple Invoicing</span>
          </div>
          <div className="menu-item">
            <img
              src="https://online.123fakturera.se/assets/unpaidInvoices-BDSWgO6w.png"
              alt="Unpaid invoice"
              className="menu-icon"
            />
            <span>Unpaid Invoices</span>
          </div>
          <div className="menu-item">
            <img
              src="https://online.123fakturera.se/assets/offer-D6rRk8QD.png"
              alt="Offer"
              className="menu-icon"
            />
            <span>Offers</span>
          </div>
          <div className="menu-item">
            <img
              src="https://online.123fakturera.se/assets/inventoryControl-CqXFntIa.png"
              alt="inventory"
              className="menu-icon"
            />
            <span>Inventory Control</span>
          </div>
          <div className="menu-item">
            <img
              src="https://online.123fakturera.se/assets/memberInvoicing-BrRSL3HS.png"
              alt="Memb invoicing"
              className="menu-icon"
            />
            <span>Member Invoicing</span>
          </div>
          <div className="menu-item">
            <img
              src="https://online.123fakturera.se/assets/importExport-DcfkwvHi.png"
              alt="Imp-exp"
              className="menu-icon"
            />
            <span>Import and Export</span>
          </div>
          <div className="menu-item">
            <img
              src="https://online.123fakturera.se/assets/support-DaW0YcI6.png"
              alt="support"
              className="menu-icon"
            />
            <span>Support</span>
          </div>
        </div>
        <div className="right-content">
          <div className="misc-bar">
            <input
              type="text"
              className="dummy-search"
              placeholder="Search Article..."
            />
            <input
              type="text"
              className="dummy-search"
              placeholder="Search Product/..."
            />

            <div className="misc-buttons">
              <div className="misc-btn">New Product</div>
              <div className="misc-btn">Price List</div>
              <div className="misc-btn">Advanced Mode</div>
            </div>
          </div>
          <div className="pricelist-table">
            <div className="table-header">
              <span>Article No.</span>
              <span>Product/Service</span>
              <span>In Price</span>
              <span>Price</span>
              <span>Unit</span>
              <span>In Stock</span>
              <span>Description</span>
            </div>
            <div className="table-body">
              {products.map((product, index) => (
                <div key={index} className="table-row">
                  <input
                    type="text"
                    value={product.article_number}
                    onChange={(e) =>
                      handleChange(index, "article_number", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    value={product.product}
                    onChange={(e) =>
                      handleChange(index, "product", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    value={product.inprice}
                    onChange={(e) =>
                      handleChange(index, "inprice", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    value={product.price}
                    onChange={(e) =>
                      handleChange(index, "price", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    value={product.unit}
                    onChange={(e) =>
                      handleChange(index, "unit", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    value={product.instock}
                    onChange={(e) =>
                      handleChange(index, "instock", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    value={product.descriptn}
                    onChange={(e) =>
                      handleChange(index, "descriptn", e.target.value)
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
