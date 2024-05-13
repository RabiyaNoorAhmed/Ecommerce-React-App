
import React, { useEffect, useState } from 'react';
import CategoryButtons from '../../components/products/CategoryButtons';
import FilterComponent from '../../components/products/Filter';
import ProductCards from '../../components/products/Cards';

const Products = () => {
    // State variables
    const [products, setProducts] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState("default");

    // Fetch products data from JSON file
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
                setFilteredItems(data);
            } catch (error) {
                console.log('Failed to fetch products:', error);
            }
        };
        fetchData();
    }, []);

    // Filter products based on selected category
    const filterItems = (category) => {
        const filtered = category === "all" ? products : products.filter((item) => item.category === category);
        setFilteredItems(filtered);
        setSelectedCategory(category);
    };

    // Show all products
    const showAll = () => {
        setFilteredItems(products);
        setSelectedCategory("all");
    };

    // Handle sorting option change
    const handleSortChange = (option) => {
        setSortOption(option);
        let sortedItems = [...filteredItems];
        switch (option) {
            case "A-Z":
                sortedItems.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "Z-A":
                sortedItems.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "low-to-high":
                sortedItems.sort((a, b) => a.price - b.price);
                break;
            case "high-to-low":
                sortedItems.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }
        setFilteredItems(sortedItems);
    };
    // Render Products component
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-20 px-4 mb-12'>
            <h2 className='title'>Or subscribe to the newsletter</h2>
            <div>
                <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>
                    <CategoryButtons showAll={showAll} filterItems={filterItems} />
                    <FilterComponent handleSortChange={handleSortChange} sortOption={sortOption} />
                </div>
                <ProductCards filteredItems={filteredItems} />
            </div>
        </div>
    );
};

export default Products;

