import React from 'react';
import noop from '@jswork/noop';
import { Breadcrumb, BreadcrumbProps } from 'antd';
import ReactList from '@jswork/react-list';
import cx from 'classnames';

// hack for react-list
// Warning: [antd: Breadcrumb] Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children
// @see: https://juejin.cn/post/6844903505832968206
ReactList['__ANT_BREADCRUMB_ITEM'] = true;

const CLASS_NAME = 'ac-breadcrumb';
type StdEventTarget = { target: { value: any } };
type StdCallback = (inEvent: StdEventTarget) => void;

type Props = {
  className?: string;
  items?: any[];
  value?: number;
  onChange?: StdCallback;
} & BreadcrumbProps;

export class AcBreadcrumb extends React.Component<Props> {
  static displayName = CLASS_NAME;
  static defaultProps = {
    onChange: noop
  };

  render() {
    const { className, value, items, onChange, ...props } = this.props;
    const len = items?.length as number;
    return (
      <Breadcrumb className={cx(className, CLASS_NAME)} {...props}>
        <ReactList
          items={items}
          template={({ item, index }) => {
            const isLast = len - 1 === index;
            const child = isLast ? (
              <span>{item}</span>
            ) : (
              <a href={item.value}>{item.label}</a>
            );

            return <Breadcrumb.Item key={index}>{child}</Breadcrumb.Item>;
          }}
        />
      </Breadcrumb>
    );
  }
}
