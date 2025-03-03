interface CalloutProps {
  title?: string;
  children: React.ReactNode;
}

function CalloutBase({
  type,
  title,
  children,
}: CalloutProps & { type: string }) {
  if (type === 'details') {
    return (
      <details className={`rspress-directive ${type}`}>
        <summary className="rspress-directive-title">{title}</summary>
        <div className="rspress-directive-content">{children}</div>
      </details>
    );
  }

  return (
    <div className={`rspress-directive ${type}`}>
      <div className="rspress-directive-title">{title}</div>
      <div className="rspress-directive-content">{children}</div>
    </div>
  );
}

export function Note(props: CalloutProps) {
  return <CalloutBase type="note" title={props.title ?? 'NOTE'} {...props} />;
}

export function Warning(props: CalloutProps) {
  return (
    <CalloutBase type="warning" title={props.title ?? 'WARNING'} {...props} />
  );
}

export function Danger(props: CalloutProps) {
  return (
    <CalloutBase type="danger" title={props.title ?? 'DANGER'} {...props} />
  );
}

export function Tip(props: CalloutProps) {
  return <CalloutBase type="tip" title={props.title ?? 'TIP'} {...props} />;
}

export function Info(props: CalloutProps) {
  return <CalloutBase type="info" title={props.title ?? 'INFO'} {...props} />;
}

export function Details(props: CalloutProps) {
  return <CalloutBase type="details" {...props} />;
}

// For backwards compatibility
export default function Callout({
  type,
  ...props
}: CalloutProps & {
  type: 'note' | 'warning' | 'danger' | 'tip' | 'info' | 'details';
}) {
  const defaultTitles: Record<Exclude<typeof type, 'details'>, string> = {
    note: 'NOTE',
    warning: 'WARNING',
    danger: 'DANGER',
    tip: 'TIP',
    info: 'INFO',
  };
  return (
    <CalloutBase
      type={type}
      title={
        type === 'details'
          ? props.title
          : (props.title ?? defaultTitles[type as keyof typeof defaultTitles])
      }
      {...props}
    />
  );
}
