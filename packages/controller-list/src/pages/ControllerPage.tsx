import * as React from 'react'
import { observer } from 'mobx-react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { appSettingsStore } from '../stores/appSettings.js'

import { ListPanel } from '../components/ListPanel.js'
import { EditPanel } from '../components/EditPanel.js'

import { GraphicsListAPI } from '../lib/graphicsListApi.js'

export const ControllerPage: React.FC = observer(() => {
	const rendererSelected = appSettingsStore.getSelectedRendererId()

	// Expose the API globally, or instantiate it once securely:
	React.useEffect(() => {
		GraphicsListAPI.init()
	}, [])

	if (!rendererSelected) {
		return null // Wait for auto-select
	}

	return (
		<Container disableGutters maxWidth={false} sx={{ height: 'calc(100vh - 64px)', p: 0.75, px: 0.75 }}>
			<Grid container spacing={1} sx={{ height: '100%' }}>
				<Grid size={{ xs: 12, md: 6 }} sx={{ height: '100%' }}>
					<ListPanel />
				</Grid>
				<Grid size={{ xs: 12, md: 6 }} sx={{ height: '100%' }}>
					<EditPanel />
				</Grid>
			</Grid>
		</Container>
	)
})
