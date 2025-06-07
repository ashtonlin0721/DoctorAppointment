
import {Container} from '@mui/material';
import {Tabs} from 'antd'
import Upcoming from '../components/Upcoming';
import History from '../components/History';
const { TabPane } = Tabs;

export default function MyAppointmentPage() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Container >
        <Tabs>
            <TabPane tab='Upcoming' key='1'>
                <h1 className='p-2'>Your Upcoming Appointments</h1>
                <Upcoming />
            </TabPane>
            <TabPane tab='History' key='2'>
                <h1 className='p-2'>Your Appointment History</h1>
                <History />
            </TabPane>
        </Tabs>
    </Container>
    
    </div>
    
  )
}
