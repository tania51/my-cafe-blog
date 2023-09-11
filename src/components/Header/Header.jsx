import profile from '../../assets/images/profile.png';
const Header = () => {
    return (
        <div className='flex justify-between items-center mt-4 pb-4 border-b-2'>
            <h2>Knowledge Cafe</h2>
            <img className='w-14' src={profile} alt="" />
        </div>
    );
};

export default Header;