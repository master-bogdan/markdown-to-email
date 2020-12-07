import React from 'react';
import { styles } from './styles';

const Divider = ({children}) => {
  return (
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      className="mcnDividerBlock" style={styles.dividerBlock}>
      <tbody className="mcnDividerBlockOuter">
        <tr>
          <td className="mcnDividerBlockInner" style={styles.dividerBlockInner}>
            <table className="mcnDividerContent"
              border={0}
              cellPadding={0}
              cellSpacing={0}
              width="100%" style={styles.dividerContent}>
              <tbody>
                <tr>
                  <td style={styles.td} data-testid="dividerChildrenTest">
                    {children}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Divider;
