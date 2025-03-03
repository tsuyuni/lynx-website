import { Space, Table, Typography } from '@douyinfe/semi-ui';
import { PlatformBadge } from '../api-badge';

const { Paragraph, Title } = Typography;

const UIApiTable = ({ source }: { source: Record<string, unknown>[] }) => {
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      render: (title, record) => {
        return (
          <Space>
            <Title
              heading={6}
              ellipsis={{ showTooltip: true }}
              style={{ maxWidth: 200 }}
            >
              {title}
            </Title>
            {record?.isSupportIOS && <PlatformBadge platform="ios" />}
            {record?.isSupportAndroid && <PlatformBadge platform="android" />}
          </Space>
        );
      },
    },
    {
      title: '说明',
      dataIndex: 'summary',
      render: (summary) => {
        const paraCollection = summary?.map((p) => p.text).join('') || '-';
        return <Paragraph>{paraCollection}</Paragraph>;
      },
    },
    {
      title: '类型',
      dataIndex: 'type',
      render: (type) => {
        return <code>{type}</code>;
      },
    },
    {
      title: '默认值',
      width: 100,
      dataIndex: 'defaultValue',
      render: (defaultValue) => {
        return defaultValue && defaultValue !== 'undefined' ? (
          <code>{defaultValue}</code>
        ) : (
          '-'
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={source} pagination={false} />;
};

export { UIApiTable };
