import { Timeline, Text } from '@mantine/core'
import {
    IconGitBranch,
    IconGitPullRequest,
    IconGitCommit,
    IconMessageDots,
} from '@tabler/icons'

export default function DeveloperTimeline() {
    return (
        <div style={{ maxWidth: 800, margin: 'auto' }}>
            <Timeline
                active={1}
                bulletSize={28}
                lineWidth={3}
                radius="md"
                color={'violet'}
            >
                <Timeline.Item
                    bullet={<IconGitBranch size={14} />}
                    title="New branch"
                >
                    <Text color="dimmed" size="sm">
                        You&apos;ve created new branch{' '}
                        <Text variant="link" component="span" inherit>
                            fix-notifications
                        </Text>{' '}
                        from master
                    </Text>
                    <Text size="xs" mt={4}>
                        2 hours ago
                    </Text>
                </Timeline.Item>

                <Timeline.Item
                    bullet={<IconGitCommit size={14} />}
                    title="Commits"
                >
                    <Text color="dimmed" size="sm">
                        You&apos;ve pushed 23 commits to
                        <Text variant="link" component="span" inherit>
                            fix-notifications branch
                        </Text>
                    </Text>
                    <Text size="xs" mt={4}>
                        52 minutes ago
                    </Text>
                </Timeline.Item>

                <Timeline.Item
                    title="Pull request"
                    bullet={<IconGitPullRequest size={14} />}
                    lineVariant="dashed"
                >
                    <Text color="dimmed" size="sm">
                        You&apos;ve submitted a pull request
                        <Text variant="link" component="span" inherit>
                            Fix incorrect notification message (#187)
                        </Text>
                    </Text>
                    <Text size="xs" mt={4}>
                        34 minutes ago
                    </Text>
                </Timeline.Item>

                <Timeline.Item
                    title="Code review"
                    bullet={<IconMessageDots size={14} />}
                >
                    <Text color="dimmed" size="sm">
                        <Text variant="link" component="span" inherit>
                            Robert Gluesticker
                        </Text>{' '}
                        left a code review on your pull request
                    </Text>
                    <Text size="xs" mt={4}>
                        12 minutes ago
                    </Text>
                </Timeline.Item>
            </Timeline>
        </div>
    )
}
