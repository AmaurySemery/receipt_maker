import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Estimate from './pages/EstimatePage';
import Receipt from './pages/Receipt';
import Pricing from './pages/Pricing';
import { EstimateService } from './services/estimateService';
import { createContext } from 'react';
import MyEstimates from './pages/MyEstimate';
import EstimateDetails from './pages/EstimateDetails';

export type Task = {
  reference: string;
  description: string;
  quantity: number;
  unitPrice: number;
  vat: number;
  // payment in advance to make sure the customer won't change his mind
  deposit: number;
}

export type Estimate = {
  id?: string;
  estimateNumber: string;
  estimateDate: Date;
  paymentDate: Date;
  title: string;
  tasks: Task[];
}

const mockData: Estimate[] = [
  {
    id: '1',
    estimateNumber: '123',
    estimateDate: new Date('12/12/11'),
    paymentDate: new Date('12/31/2022'),
    title: 'Super Estimate from Hell',
    tasks: [
      {
        reference: 'frfs',
        description: 'French Fries',
        quantity: 2,
        unitPrice: 4.99,
        deposit: 0,
        vat: 20
      },
      {
        reference: 'pzz',
        description: 'Pizza Regina',
        quantity: 4,
        unitPrice: 12,
        deposit: 5,
        vat: 20
      },
    ]
  },
  {
    id: '2',
    estimateNumber: '456',
    estimateDate: new Date('12/12/11'),
    paymentDate: new Date('12/30/2022'),
    title: 'Another Great Estimate',
    tasks: [
      {
        reference: 'drn',
        description: 'Flying Drone',
        quantity: 1,
        unitPrice: 419.99,
        deposit: 100,
        vat: 20
      },
      {
        reference: 'smrtphn',
        description: 'iPhone 13',
        quantity: 1,
        unitPrice: 989.60,
        deposit: 200,
        vat: 20
      },
    ]
  },
  {
    id: '3',
    estimateNumber: '345',
    estimateDate: new Date('14/12/11'),
    paymentDate: new Date('15/31/2022'),
    title: 'Garden',
    tasks: [
      {
        reference: 'lwm',
        description: 'French kiss',
        quantity: 1,
        unitPrice: 10.99,
        deposit: 0,
        vat: 20
      },
      {
        reference: 'char',
        description: 'Dassault',
        quantity: 6,
        unitPrice: 50000,
        deposit: 5,
        vat: 20
      },
    ]
  },
  {
    id: '4',
    estimateNumber: '215',
    estimateDate: new Date('01/12/11'),
    paymentDate: new Date('01/03/2023'),
    title: 'Garage',
    tasks: [
      {
        reference: 'sdbgv',
        description: 'Voiture',
        quantity: 1,
        unitPrice: 12000,
        deposit: 100,
        vat: 20
      },
      {
        reference: 'sdfq',
        description: 'essence',
        quantity: 50,
        unitPrice: 1.60,
        deposit: 200,
        vat: 20
      },
    ]
  },
]

// To make sure there's only a single instance of an EstimateSrv
// we put this instance in a context that we consume in all other components
const estimateSrv = new EstimateService(mockData);
export const EstimateCtx = createContext(estimateSrv);

function App() {
  return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-estimate" element={<Estimate />} />
          <Route path="/new-receipt" element={<Receipt />} />
          <Route path="/my-estimates" element={<MyEstimates />} />
          <Route path="/my-estimates/:id" element={<EstimateDetails />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
  )
}

export default App
