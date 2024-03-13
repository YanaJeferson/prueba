import React from 'react';
import NavBar from '../components/NavBar';

const Table = () => {
  return (
    <>
      <NavBar />
      <div className='mx-auto container flex justify-center items-center'>
      <div className="p-20 flex justify-center">
        <table>
          <tbody>
		<tr className='header-table'>
			<td></td>
			<td colspan="4">cantidad</td>
		</tr>
		<tr className='header-table'>
			<td className='header-table'>producto</td>
			<td>inicial</td>
			<td>ingreso</td>
			<td>salida</td>
			<td className='header-table'>final</td>
		</tr>
		<tr>
			<td className='header-table'>cobre</td>
			<td>--</td>
			<td>20</td>
			<td>5</td>
			<td className='header-table'>15</td>
		</tr>
		<tr>
			<td className='header-table'>plata</td>
			<td>150</td>
			<td>25</td>
			<td>10</td>
			<td className='header-table'>165</td>
		</tr>
		<tr>
			<td className='header-table'>plomo</td>
			<td>250</td>
			<td>60</td>
			<td>9</td>
			<td className='header-table'>301</td>
		</tr>
		<tr>
			<td className='header-table'>oro</td>
			<td>500</td>
			<td>15</td>
			<td>8</td>
			<td className='header-table'>507</td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr className='footer-table'>
			<td>totales</td>
			<td>900</td>
			<td>120</td>
			<td>32</td>
			<td>988</td>
		</tr>
	</tbody>
  </table>
      </div>
      </div>
    </>
  );
};

export default Table;
