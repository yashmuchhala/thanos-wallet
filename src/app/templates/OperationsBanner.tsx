import * as React from "react";
import classNames from "clsx";
import ReactJson from "react-json-view";

type OperationsBanner = {
  opParams: any[];
  className?: string;
};

const OperationsBanner: React.FC<OperationsBanner> = ({ opParams }) => (
  <>
    <h2
      className={classNames(
        "w-full mb-2",
        "text-base font-semibold leading-tight",
        "text-gray-700"
      )}
    >
      Operations
    </h2>

    <div
      className={classNames(
        "block w-full max-w-full mb-4 p-1",
        "rounded-md overflow-auto",
        "border-2 bg-gray-100 bg-opacity-50",
        "text-base leading-tight font-medium whitespace-no-wrap"
      )}
      style={{
        height: "10rem",
      }}
    >
      <ReactJson
        src={opParams}
        name={null}
        iconStyle="square"
        indentWidth={4}
        collapsed={false}
        collapseStringsAfterLength={36}
        enableClipboard={false}
        displayObjectSize={false}
        displayDataTypes={false}
      />
    </div>
  </>
);

export default OperationsBanner;
