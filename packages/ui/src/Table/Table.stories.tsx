import type { Meta, StoryObj } from '@storybook/react-vite';

import * as Table from './index';

const SKIN_INVENTORY = [
   {
      skin: 'AWP | Dragon Lore',
      condition: 'Factory New',
      price: '$15,000',
      status: 'rare',
      notes: 'dropped in silver mm lol',
   },
   {
      skin: 'Karambit | Fade',
      condition: 'Minimal Wear',
      price: '$1,800',
      status: 'epic',
      notes: 'unboxed it crying rn',
   },
   {
      skin: 'P250 | Sand Dune',
      condition: 'Battle-Scarred',
      price: '$0.03',
      status: 'legendary',
      notes: 'the real endgame',
   },
   {
      skin: 'AK-47 | Redline',
      condition: 'Field-Tested',
      price: '$15',
      status: 'common',
      notes: '4x ibp holo when',
   },
   {
      skin: 'Negev | Power Loader',
      condition: 'Factory New',
      price: '$0.50',
      status: 'meme',
      notes: 'for the culture',
   },
];

function TableDemo() {
   return (
      <Table.Root>
         <Table.Caption>my cs2 inventory</Table.Caption>
         <Table.Header>
            <Table.Row>
               <Table.Head>Skin</Table.Head>
               <Table.Head>Condition</Table.Head>
               <Table.Head>Status</Table.Head>
               <Table.Head>Market Price</Table.Head>
               <Table.Head className="text-start!">Notes</Table.Head>
            </Table.Row>
         </Table.Header>
         <Table.Body>
            {SKIN_INVENTORY.map((item) => (
               <Table.Row key={item.skin}>
                  <Table.Cell className="font-medium">{item.skin}</Table.Cell>
                  <Table.Cell>{item.condition}</Table.Cell>
                  <Table.Cell>{item.status}</Table.Cell>
                  <Table.Cell>{item.price}</Table.Cell>
                  <Table.Cell>{item.notes}</Table.Cell>
               </Table.Row>
            ))}
         </Table.Body>
         <Table.Footer>
            <Table.Row>
               <Table.Cell colSpan={4}>Total Inventory Value</Table.Cell>
               <Table.Cell>still silver tho</Table.Cell>
            </Table.Row>
         </Table.Footer>
      </Table.Root>
   );
}

function SimpleTable() {
   return (
      <Table.Root>
         <Table.Header>
            <Table.Row>
               <Table.Head>Map</Table.Head>
               <Table.Head>Your Teams Strat</Table.Head>
               <Table.Head>Win Rate</Table.Head>
            </Table.Row>
         </Table.Header>
         <Table.Body>
            <Table.Row>
               <Table.Cell>Dust 2</Table.Cell>
               <Table.Cell>rush b no stop</Table.Cell>
               <Table.Cell>12%</Table.Cell>
            </Table.Row>
            <Table.Row>
               <Table.Cell>Mirage</Table.Cell>
               <Table.Cell>everyone goes A except you</Table.Cell>
               <Table.Cell>8%</Table.Cell>
            </Table.Row>
            <Table.Row>
               <Table.Cell>Inferno</Table.Cell>
               <Table.Cell>smoke banana miss smoke banana</Table.Cell>
               <Table.Cell>15%</Table.Cell>
            </Table.Row>
            <Table.Row>
               <Table.Cell>Nuke</Table.Cell>
               <Table.Cell>get lost in vents</Table.Cell>
               <Table.Cell>3%</Table.Cell>
            </Table.Row>
         </Table.Body>
      </Table.Root>
   );
}

function StripedTable() {
   return (
      <Table.Root>
         <Table.Header>
            <Table.Row>
               <Table.Head>Teammate</Table.Head>
               <Table.Head>What They Said</Table.Head>
               <Table.Head className="text-start!">Result</Table.Head>
            </Table.Row>
         </Table.Header>
         <Table.Body>
            <Table.Row className="bg-secondary">
               <Table.Cell>bottom fragger</Table.Cell>
               <Table.Cell>"rush b dont stop"</Table.Cell>
               <Table.Cell>stopped</Table.Cell>
            </Table.Row>
            <Table.Row>
               <Table.Cell>awper</Table.Cell>
               <Table.Cell>"save for awp"</Table.Cell>
               <Table.Cell>0 kills whole game</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-secondary">
               <Table.Cell>russian guy</Table.Cell>
               <Table.Cell>"cyka blyat"</Table.Cell>
               <Table.Cell>ace (somehow)</Table.Cell>
            </Table.Row>
            <Table.Row>
               <Table.Cell>igl wannabe</Table.Cell>
               <Table.Cell>"trust me i saw this on youtube"</Table.Cell>
               <Table.Cell>team killed by molly</Table.Cell>
            </Table.Row>
         </Table.Body>
      </Table.Root>
   );
}

function SelectableTable() {
   return (
      <Table.Root>
         <Table.Header>
            <Table.Row>
               <Table.Head>Excuse</Table.Head>
               <Table.Head>Translation</Table.Head>
               <Table.Head>Times Used Today</Table.Head>
            </Table.Row>
         </Table.Header>
         <Table.Body>
            <Table.Row data-state="selected">
               <Table.Cell>"64 tick"</Table.Cell>
               <Table.Cell>i whiffed</Table.Cell>
               <Table.Cell>47</Table.Cell>
            </Table.Row>
            <Table.Row>
               <Table.Cell>"my crosshair was on him"</Table.Cell>
               <Table.Cell>it wasnt</Table.Cell>
               <Table.Cell>89</Table.Cell>
            </Table.Row>
            <Table.Row>
               <Table.Cell>"bro hes cheating"</Table.Cell>
               <Table.Cell>hes not im just bad</Table.Cell>
               <Table.Cell>124</Table.Cell>
            </Table.Row>
            <Table.Row>
               <Table.Cell>"lag"</Table.Cell>
               <Table.Cell>5ms ping btw</Table.Cell>
               <Table.Cell>too many</Table.Cell>
            </Table.Row>
         </Table.Body>
      </Table.Root>
   );
}

const meta = {
   title: 'Components/Table',
   component: Table.Root,
} satisfies Meta<typeof Table.Root>;

export default meta;

type Story = StoryObj<typeof Table.Root>;

export const Default: Story = {
   render: () => <TableDemo />,
};

export const Simple: Story = {
   render: () => <SimpleTable />,
};

export const Striped: Story = {
   render: () => <StripedTable />,
};

export const WithSelectedRow: Story = {
   render: () => <SelectableTable />,
};
