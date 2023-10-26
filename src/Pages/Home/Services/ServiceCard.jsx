import PropTypes from 'prop-types';

const ServiceCard = ({ service }) => {

    const { title, img, price } = service;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-5 pt-10">
                    <img src={img} alt="" className="rounded-xl h-72" />
                </figure>
                <div className="card-body">
                    <h2 className=" text-3xl font-bold">{title}</h2>
                    <p className='text-[#FF3811] font-bold text-xl mt-3'>Price: ${price}</p>
                    <div className='mt-4'>
                        <button className="btn btn-outline border-[#FF3811] bg-[#FF3811] text-white hover:bg-[#FF3811] hover:border-[#FF3811]">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object,
};

export default ServiceCard;