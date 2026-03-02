import React, { useState } from 'react'

// Figma asset URLs (valid for 7 days from design fetch)
const assets = {
  logo: 'https://www.figma.com/api/mcp/asset/0f9f12dd-8805-4c9f-a468-4b5eb03e2619',
  home: 'https://www.figma.com/api/mcp/asset/8d11464d-2d36-4931-a067-092717f96a11',
  fileText: 'https://www.figma.com/api/mcp/asset/c32417aa-5b33-43da-940c-31e11d66be5d',
  tool: 'https://www.figma.com/api/mcp/asset/eedb7f0f-815e-42a5-a9de-ecd2df22b073',
  settings: 'https://www.figma.com/api/mcp/asset/8498e8c3-5afe-42f8-9b95-8a69cc1ca0ca',
  checkCircle: 'https://www.figma.com/api/mcp/asset/0a0c9a0c-2405-43c7-9042-87479989aaa9',
  exclamationCircle: 'https://www.figma.com/api/mcp/asset/a7154124-46fa-48e7-8cf9-db486196007e',
  search: 'https://www.figma.com/api/mcp/asset/d8f56ca1-af6f-4938-9ca6-80f8f3487885',
  category: 'https://www.figma.com/api/mcp/asset/2a248b3c-6221-4885-bebe-ac58a7302d7a',
  location: 'https://www.figma.com/api/mcp/asset/cf362d08-d59d-4555-9df4-860335731094',
  plus: 'https://www.figma.com/api/mcp/asset/a82a83fa-5cd3-497a-93fc-c98ccf9fde3d',
  expand: 'https://www.figma.com/api/mcp/asset/ab0bf172-78bc-422f-9efc-b69d351460e4',
  trash: 'https://www.figma.com/api/mcp/asset/f76b2bcc-475c-4255-a468-efad4d5036e6',
  sort: 'https://www.figma.com/api/mcp/asset/ced0f36b-d1de-4cb8-afa4-b8b5f94d503b',
  upload: 'https://www.figma.com/api/mcp/asset/33cd2ba3-01ab-45c0-a714-6ab6fe590d3d',
  complete: 'https://www.figma.com/api/mcp/asset/bc40f026-0964-418b-b922-fdd13d0cd170',
  incomplete: 'https://www.figma.com/api/mcp/asset/6ed6bc61-d2fd-4536-83b7-975aa2cb7714',
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: assets.home, section: 'operations' },
  { id: 'transactions', label: 'Transactions', icon: assets.fileText, section: 'history' },
  { id: 'variance', label: 'Variance comments', icon: assets.tool, section: 'history' },
]
const SETTINGS_ITEM = { id: 'settings', label: 'Settings', icon: assets.settings }

const SUMMARY_CARDS = [
  { label: 'Time saved', value: '1,110', sub: 'minutes saved with Truebase this month', icon: assets.checkCircle, status: 'success' },
  { label: 'Completed', value: '134', sub: 'transactions completed this month', icon: assets.checkCircle, status: 'success' },
  { label: 'Transactions', value: '2', sub: 'transactions to complete', icon: assets.exclamationCircle, status: 'warning' },
  { label: 'Variance Comments', value: '2', sub: 'variance comments to complete', icon: assets.exclamationCircle, status: 'warning' },
]

const TRANSACTIONS = [
  { id: 1, date: '02/01/2025', vendor: 'Home Depot', category: '-', property: 'Main Street', unit: '-', amount: '$95.90', memo: '-', receipt: null, complete: true },
  { id: 2, date: '02/01/2025', vendor: 'Home Depot', category: '7200 - Plumbing', property: 'Main Street', unit: '2D', amount: '$95.90', memo: 'Tenant leak that needed to be repaired as soon as possible to avoid water damage to other units in the building', receipt: ['Receipt01_homedepot', 'Invoice01_homedepot'], complete: false, selected: true },
]

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState('home')
  const [activeTab, setActiveTab] = useState('transactions')
  const [selectedRows, setSelectedRows] = useState([2])

  const toggleRow = (id) => {
    setSelectedRows((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  return (
    <div className="flex h-screen bg-[#f9fafc]">
      {/* Sidebar */}
      <aside className="flex h-full w-[245px] shrink-0 flex-col gap-4 border-r border-border-menu border-solid p-6">
        <div className="px-2 py-2">
          <img src={assets.logo} alt="truebase" className="h-[19px] w-[88px] object-contain" />
        </div>
        <nav className="flex w-full flex-col gap-2">
          <div className="flex flex-col">
            <div className="px-2 py-1">
              <p className="text-xs text-black/50">Operations</p>
            </div>
            <button
              onClick={() => setActiveNav('home')}
              className={`flex h-9 w-full items-center gap-2.5 rounded-lg px-2 ${
                activeNav === 'home' ? 'border border-[#ececec] bg-white' : ''
              }`}
            >
              <img src={assets.home} alt="" className="h-3.5 w-3.5 shrink-0" />
              <span className="text-sm text-black">Home</span>
            </button>
          </div>
          <div className="flex flex-col">
            <div className="px-2 py-1">
              <p className="text-xs text-black/50">History</p>
            </div>
            <button
              onClick={() => setActiveNav('transactions')}
              className="flex h-9 w-full items-center gap-2.5 rounded-lg px-2 text-sm text-black/88"
            >
              <img src={assets.fileText} alt="" className="h-3.5 w-3.5 shrink-0" />
              Transactions
            </button>
            <button
              onClick={() => setActiveNav('variance')}
              className="flex h-9 w-full items-center gap-2.5 rounded-lg px-2 text-sm text-black/88"
            >
              <img src={assets.tool} alt="" className="h-3.5 w-3.5 shrink-0" />
              Variance comments
            </button>
          </div>
          <div className="flex flex-col">
            <div className="px-2 py-1">
              <p className="text-xs text-black/50">System control</p>
            </div>
            <button className="flex h-9 w-full items-center gap-2.5 rounded-lg px-2 text-sm text-black/88">
              <img src={assets.settings} alt="" className="h-3.5 w-3.5 shrink-0" />
              Settings
            </button>
          </div>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex min-w-0 flex-1 flex-col gap-4 bg-white p-6">
        <header>
          <h1 className="text-[36px] font-medium leading-none text-black">Home</h1>
        </header>

        {/* Summary cards */}
        <div className="flex gap-4">
          {SUMMARY_CARDS.map((card) => (
            <div
              key={card.label}
              className="flex min-w-0 flex-1 flex-col gap-2 overflow-hidden rounded-lg border border-border-light bg-white p-4"
            >
              <div className="flex items-center gap-2">
                <img src={card.icon} alt="" className="h-5 w-5 shrink-0" />
                <span className="text-sm font-medium text-black/70">{card.label}</span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[32px] font-medium leading-none text-black">{card.value}</p>
                <p className="text-[10px] text-[#737373]">{card.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex border-b-2 border-border">
          <button
            onClick={() => setActiveTab('transactions')}
            className={`flex flex-1 items-center justify-center px-1 py-1 text-sm ${
              activeTab === 'transactions'
                ? 'border-b-2 border-brand font-bold text-cool-gray-600'
                : 'border-b-2 border-transparent font-medium text-cool-gray-600'
            }`}
          >
            TRANSACTIONS
          </button>
          <button
            onClick={() => setActiveTab('variance')}
            className={`flex flex-1 items-center justify-center px-1 py-1 text-sm ${
              activeTab === 'variance'
                ? 'border-b-2 border-brand font-bold text-cool-gray-600'
                : 'border-b-2 border-[#d2d2d2] font-medium text-cool-gray-600'
            }`}
          >
            VARIANCE COMMENTS
          </button>
        </div>

        {/* Transactions section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-medium text-black">Transactions (2)</h2>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-[33px] items-center rounded-lg border border-[#d9d9d9] bg-white px-2 shadow-sm">
                <img src={assets.search} alt="" className="mr-2 h-3.5 w-3.5 opacity-70" />
                <span className="text-sm text-black/44">Search</span>
              </div>
              <button className="flex items-center gap-1 rounded-md border border-dashed border-[#e5e4e1] px-3 py-2 text-sm text-black">
                <img src={assets.category} alt="" className="h-4 w-4" />
                Category
              </button>
              <button className="flex items-center gap-1 rounded-md border border-dashed border-[#e5e4e1] px-3 py-2 text-sm text-black">
                <img src={assets.location} alt="" className="h-4 w-4" />
                Property
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 rounded-md border border-[#e5e4e1] bg-white px-3 py-2 text-sm text-black">
                <img src={assets.plus} alt="" className="h-4 w-4" />
                Add
              </button>
              <button className="flex items-center gap-1 rounded-md border border-[#e5e4e1] bg-white px-3 py-2 text-sm text-black">
                <img src={assets.expand} alt="" className="h-4 w-4" />
                Expand
              </button>
              <button className="flex items-center gap-1 rounded-md border border-[#e5e4e1] bg-white px-3 py-2 text-sm text-black">
                <img src={assets.trash} alt="" className="h-4 w-4" />
                Delete
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full table-fixed border-collapse text-sm">
              <thead>
                <tr className="bg-header-bg">
                  <th className="w-12 border border-border px-4 py-3 text-left">
                    <div className="h-4 w-4 rounded-sm border border-[#a6a5a2] bg-white" />
                  </th>
                  <th className="border border-border px-4 py-3 text-left">
                    <div className="flex items-center justify-between font-semibold text-black/70">
                      Date
                      <img src={assets.sort} alt="" className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="border border-border px-4 py-3 text-left">
                    <div className="flex items-center justify-between font-semibold text-black/70">
                      Vendor
                      <img src={assets.sort} alt="" className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="border border-border px-4 py-3 text-left">
                    <div className="flex items-center justify-between font-semibold text-black/70">
                      Category
                      <img src={assets.sort} alt="" className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="border border-border px-4 py-3 text-left">
                    <div className="flex items-center justify-between font-semibold text-black/70">
                      Property
                      <img src={assets.sort} alt="" className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="border border-border px-4 py-3 text-left">
                    <div className="flex items-center justify-between font-semibold text-black/70">
                      Unit
                      <img src={assets.sort} alt="" className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="border border-border px-4 py-3 text-left">
                    <div className="flex items-center justify-between font-semibold text-black/70">
                      Amount
                      <img src={assets.sort} alt="" className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-black/70">
                    Memo
                  </th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-black/70">
                    Receipt
                  </th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-black/70">
                    Complete?
                  </th>
                </tr>
              </thead>
              <tbody>
                {TRANSACTIONS.map((row) => (
                  <tr
                    key={row.id}
                    className={selectedRows.includes(row.id) ? 'bg-row-hover' : ''}
                  >
                    <td className="border border-border px-4 py-3">
                      <button
                        onClick={() => toggleRow(row.id)}
                        className="flex h-4 w-4 items-center justify-center rounded-sm border border-[#a6a5a2] bg-white"
                        style={selectedRows.includes(row.id) ? { backgroundColor: '#1b58de', borderColor: '#1b58de' } : {}}
                      >
                        {selectedRows.includes(row.id) && (
                          <svg width="11" height="9" viewBox="0 0 11 9" fill="none" className="text-white">
                            <path d="M1 4.5L4 7.5L10 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </button>
                    </td>
                    <td className="border border-border px-4 py-3 font-medium text-black/70">{row.date}</td>
                    <td className="border border-border px-4 py-3 truncate text-black/70">{row.vendor}</td>
                    <td className="border border-border px-4 py-3">
                      {row.category === '-' ? (
                        <span className="text-black/70">-</span>
                      ) : (
                        <span className="rounded-lg border border-[#ececec] bg-[#fbfbfb] px-3 py-0.5 text-sm font-medium text-black/70">
                          {row.category}
                        </span>
                      )}
                    </td>
                    <td className="border border-border px-4 py-3">
                      <span className="rounded-lg border border-[#ececec] bg-[#fbfbfb] px-3 py-0.5 text-sm font-medium text-black/70">
                        {row.property}
                      </span>
                    </td>
                    <td className="border border-border px-4 py-3 text-black/70">{row.unit}</td>
                    <td className="border border-border px-4 py-3 text-black/70">{row.amount}</td>
                    <td className="border border-border px-4 py-3 text-black/70">
                      <span className="line-clamp-2">{row.memo}</span>
                    </td>
                    <td className="border border-border px-4 py-3">
                      {row.receipt ? (
                        <div className="flex flex-col gap-1">
                          {row.receipt.map((r) => (
                            <span
                              key={r}
                              className="rounded-lg border border-[#ececec] bg-[#fbfbfb] px-3 py-0.5 text-sm font-medium text-black/70"
                            >
                              {r}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <img src={assets.upload} alt="Upload" className="inline-block h-4 w-4 -rotate-90 opacity-70" />
                      )}
                    </td>
                    <td className="border border-border px-4 py-3">
                      {row.complete ? (
                        <div className="inline-flex h-4 w-4 rounded-full bg-success-bg items-center justify-center">
                          <img src={assets.complete} alt="Complete" className="h-3 w-3" />
                        </div>
                      ) : (
                        <div className="inline-flex h-4 w-4 rounded-full bg-pending-bg items-center justify-center">
                          <img src={assets.incomplete} alt="Incomplete" className="h-3 w-3" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
