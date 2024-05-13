import NavItems from './NavItem'
const CategoryItems = ({ navItems }) => (
    <div className='pt-4'>
        <ul className='lg:flex items-center justify-between text-Black hidden'>
            {navItems.map(({ title }) => (
                <NavItems key={title} title={title} />
            ))}
        </ul>
    </div>
);
export default CategoryItems